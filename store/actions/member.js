export const actionTypes = {
  LOGIN_REQUEST:"LOGIN_REQUEST",
  LOGOUT_REQUEST:"LOGOUT_REQUEST",
    LOGIN_SUCCESS:"LOGIN_SUCCESS",
    LOGOUT_SUCCESS:"LOGOUT_SUCCESS",
    REGISTER_SUCCESS:"REGISTER_SUCCESS",
    REGISTER_TP_REQUEST:"REGISTER_TP_REQUEST",
    REGISTER_TP_SUCCESS:"REGISTER_TP_SUCCESS",
    REGISTER_TL_REQUEST:"REGISTER_TL_REQUEST",
    REGISTER_TL_SUCCESS:"REGISTER_TL_SUCCESS",
    LIST_TL_REQUEST:"LIST_TL_REQUEST",
    LIST_TP_REQUEST:"LIST_TP_REQUEST",
    LIST_TL_SUCCESS:"LIST_TL_SUCCESS",
    LIST_TP_SUCCESS:"LIST_TP_SUCCESS",
  }
  
  export const loginMember = (data) => {
    return {
      type: actionTypes.LOGIN_REQUEST,
      payload: data,
    };
  };
  export const listLeader = () => {
    return {
      type: actionTypes.LIST_TL_REQUEST,
    };
  };
  export const listLeaderSuccess = (data) => {
    return {
      type: actionTypes.LIST_TL_SUCCESS,
      payload: data,
    };
  };
  export const listParticipant = () => {
    return {
      type: actionTypes.LIST_TP_REQUEST,
    };
  };
  export const listParticipantSuccess = (data) => {
    return {
      type: actionTypes.LIST_TP_SUCCESS,
      payload: data,
    };
  };

  export const loginMemberSuccess = (data) => {
    return {
      type: actionTypes.LOGIN_SUCCESS,
      payload: data,
    };
  };
  export const logoutMemberSuccess = () => {
    return {
      type: actionTypes.LOGOUT_SUCCESS,
      payload: null,
    };
  };
  export const registMemberSuccess = (data) => {
    return {
      type: actionTypes.REGISTER_SUCCESS,
      payload: data,
    };
  };
  export const registTourParticipant = (data) => {
    return {
      type: actionTypes.REGISTER_TP_REQUEST,
      payload: data,
    };
  };
  export const registTourParticipantSuccess = (data) => {
    return {
      type: actionTypes.REGISTER_TP_SUCCESS,
      payload: data,
    };
  };
  export const registTourLeader = (data) => {
    return {
      type: actionTypes.REGISTER_TL_REQUEST,
      payload: data,
    };
  };
  export const registTourLeaderSuccess = (data) => {
    return {
      type: actionTypes.REGISTER_TL_SUCCESS,
      payload: data,
    };
  };
  