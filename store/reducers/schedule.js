import { actionTypes } from "../actions/schedule";
import { HYDRATE } from "next-redux-wrapper";
const initialState = {
  All: null,
  Detail:null
};

const schedule = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case HYDRATE:
      return {...state, ...payload.schedule}
    case actionTypes.LIST_SCHEDULE_SUCCESS:
      return { ...state, 
        All:payload };
      case actionTypes.DETAIL_SCHEDULE_SUCCESS:
          return { 
            ...state, 
            Detail:payload };
            default:
              return state;
  }
};

export default schedule;
