export const actionTypes = {
      CURRENT_REGISTER_OBJECT:"CURRENT_REGISTER_OBJECT",
      REGISTER_OBJECT_REQUEST:"REGISTER_OBJECT_REQUEST",
      REGISTER_OBJECT_SUCCESS:"REGISTER_OBJECT_SUCCESS",
      REGISTER_MAP_OBJECT_REQUEST:"REGISTER_MAP_OBJECT_REQUEST",
      REGISTER_MAP_OBJECT_SUCCESS:"REGISTER_MAP_OBJECT_SUCCESS",
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
    export const currentObject = (data) => {
      return {
        type: actionTypes.CURRENT_REGISTER_OBJECT,
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
      
    for (var pair of data.entries()) {
      console.log(pair[0]+ ', ' + pair[1]); 
  }
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
    export const registMapObject = (data) => {
      return {
        type: actionTypes.REGISTER_MAP_OBJECT_REQUEST,
        payload: data,
      };
    };
    export const registMapObjectSuccess = (data) => {
      return {
        type: actionTypes.REGISTER_MAP_OBJECT_SUCCESS,
        payload: data,
      };
    };
    