export const actionTypes = {
    REGISTER_TOURSCHEDULE_REQUEST:"REGISTER_TOURSCHEDULE_REQUEST",
    REGISTER_TOURSCHEDULE_SUCCESS:"REGISTER_TOURSCHEDULE_SUCCESS",
    REGISTER_TOURGROUPSCHEDULE_REQUEST:"REGISTER_TOURGROUPSCHEDULE_REQUEST",
    REGISTER_TOURGROUPSCHEDULE_SUCCESS:"REGISTER_TOURGROUPSCHEDULE_SUCCESS",
    LIST_SCHEDULE_REQUEST:"LIST_SCHEDULE_REQUEST",
    LIST_SCHEDULE_SUCCESS:"LIST_SCHEDULE_SUCCESS",
    DETAIL_SCHEDULE_REQUEST:"DETAIL_SCHEDULE_REQUEST",
    DETAIL_SCHEDULE_SUCCESS:"DETAIL_SCHEDULE_SUCCESS",
  }
  
  export const listSchedule = () => {
    return {
      type: actionTypes.LIST_SCHEDULE_REQUEST,
    };
  };
  export const listScheduleSuccess = (data) => {
    return {
      type: actionTypes.LIST_SCHEDULE_SUCCESS,
      payload: data,
    };
  };
  export const detailSchedule = (data) => {
    return {
      type: actionTypes.DETAIL_SCHEDULE_REQUEST,
      payload: data,
    };
  };
  export const detailScheduleSuccess = (data) => {
    return {
      type: actionTypes.DETAIL_SCHEDULE_SUCCESS,
      payload: data,
    };
  };
  export const registTourSchedule = (data) => {
    return {
      type: actionTypes.REGISTER_TOURSCHEDULE_REQUEST,
      payload: data,
    };
  };
  export const registTourScheduleSuccess = (data) => {
    return {
      type: actionTypes.REGISTER_TOURSCHEDULE_SUCCESS,
      payload: data,
    };
  };
  export const registTourGroupSchedule = (data) => {
    return {
      type: actionTypes.REGISTER_TOURGROUPSCHEDULE_REQUEST,
      payload: data,
    };
  };
  export const registTourGroupScheduleSuccess = (data) => {
    return {
      type: actionTypes.REGISTER_TOURGROUPSCHEDULE_SUCCESS,
      payload: data,
    };
  };
  