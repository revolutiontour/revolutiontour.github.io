import { actionTypes } from "../actions/schedule";
const initialState = {
  All: null,
  Detail:null
};

const schedule = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
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
