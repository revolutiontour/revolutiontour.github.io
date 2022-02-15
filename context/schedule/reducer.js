import { actionTypes } from "./action";
const initialState = {
  sAll: null,
  sDetail: null
};

export const scheduleReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.LIST_SCHEDULE_SUCCESS:
      return { ...state, sAll: payload };
    case actionTypes.DETAIL_SCHEDULE_SUCCESS:
      return {
        ...state,
        sDetail: payload
      };
    default:
      return state;
  }
};
