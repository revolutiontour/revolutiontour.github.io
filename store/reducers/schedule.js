import { actionTypes } from "../actions/schedule";
import { HYDRATE } from "next-redux-wrapper";
const initialState = {
  sAll: null,
  sDetail:null
};

const schedule = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case HYDRATE:
      if(state.sAll){
        delete payload.schedule.sAll
      }
      return {...state, ...payload.schedule}
    case actionTypes.LIST_SCHEDULE_SUCCESS:
      return { ...state, 
        sAll:payload };
      case actionTypes.DETAIL_SCHEDULE_SUCCESS:
          return { 
            ...state, 
            Detail:payload };
            default:
              return state;
  }
};

export default schedule;
